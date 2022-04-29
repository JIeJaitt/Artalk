package model

func DelComment(commentID uint) error {
	// 查询 Comment
	comment := FindComment(commentID)

	// 清除 notify
	if err := DB().Unscoped().Where("comment_id = ?", commentID).Delete(&Notify{}).Error; err != nil {
		return err
	}

	// 清除 vote
	if err := DB().Unscoped().Where(
		"target_id = ? AND (type = ? OR type = ?)",
		commentID,
		string(VoteTypeCommentUp),
		string(VoteTypeCommentDown),
	).Delete(&Vote{}).Error; err != nil {
		return err
	}

	// 删除 comment
	err := DB().Unscoped().Delete(&Comment{}, commentID).Error
	if err != nil {
		return err
	}

	// 删除缓存
	CommentCacheDel(&comment)

	return nil
}

// 删除所有子评论
func DelCommentChildren(pComment Comment) error {
	var rErr error
	children := pComment.ToCooked().FetchChildrenWithCheckers()
	for _, c := range children {
		err := DelComment(c.ID)
		if err != nil {
			rErr = err
		}
	}
	return rErr
}

func DelPage(page *Page) error {
	err := DB().Unscoped().Delete(page).Error
	if err != nil {
		return err
	}

	// 删除所有相关内容
	var comments []Comment
	DB().Where("page_key = ? AND site_name = ?", page.Key, page.SiteName).Find(&comments)

	for _, c := range comments {
		DelComment(c.ID)
	}

	// 删除 vote
	DB().Unscoped().Where(
		"target_id = ? AND (type = ? OR type = ?)",
		page.ID,
		string(VoteTypePageUp),
		string(VoteTypePageDown),
	).Delete(&Vote{})

	// 删除缓存
	PageCacheDel(page)

	return nil
}

func DelSite(site *Site, softDel bool) error {
	err := DB().Unscoped().Delete(&site).Error
	if err != nil {
		return err
	}

	// 删除所有相关内容
	if !softDel {
		var pages []Page
		DB().Where("site_name = ?", site.Name).Find(&pages)

		for _, p := range pages {
			DelPage(&p)
		}
	}

	// 删除缓存
	SiteCacheDel(site)

	return nil
}

func DelUser(user *User) error {
	err := DB().Unscoped().Delete(&user).Error
	if err != nil {
		return err
	}

	// 删除缓存
	UserCacheDel(user)

	return nil
}
