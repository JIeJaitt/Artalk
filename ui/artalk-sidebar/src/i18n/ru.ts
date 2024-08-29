import type { MessageSchema } from '../i18n'

export const ru: MessageSchema = {
  ctrlCenter: 'Центр управления',
  msgCenter: 'Центр уведомлений',
  noContent: 'Нет контента',
  searchHint: 'Поиск по ключевым словам...',
  allSites: 'Все сайты',
  siteManage: 'Управление сайтом',
  comment: 'Комментарий',
  page: 'Страница',
  user: 'Пользователь',
  site: 'Сайт',
  transfer: 'Перенос',
  settings: 'Настройки',
  all: 'Все',
  pending: 'Ожидается',
  personal: 'Личное',
  mentions: 'Упоминания',
  mine: 'Мои',
  admin: 'Администратор',
  create: 'Создать',
  import: 'Импортировать',
  export: 'Экспортировать',
  settingSaved: 'Настройки сохранены',
  settingSaveFailed: 'Ошибка сохранения настроек',
  settingNotice:
    'Примечание: некоторые настройки могут потребовать ручной перезагрузки для вступления в силу',
  apply: 'Применить',
  updateComplete: 'Обновление завершено',
  updateReady: 'Готово к обновлению...',
  opFailed: 'Операция не удалась',
  updateTitle: 'Обновление заголовка',
  uploading: 'Загрузка',
  cancel: 'Отмена',
  back: 'Назад',
  cacheClear: 'Очистка кеша',
  cacheWarm: 'Разогрев кеша',
  editTitle: 'Редактировать заголовок',
  switchKey: 'Изменение ключа',
  commentAllowAll: 'Разрешить комментарии всем',
  commentOnlyAdmin: 'Комментарии разрешены только администраторам',
  config: 'Файл конфигурации',
  envVarControlHint: 'Управляется переменной окружения {key}',
  userAdminHint: 'У этого пользователя есть права администратора',
  userInConfHint: 'Этот пользователь существует в файле конфигурации',
  edit: 'Редактировать',
  delete: 'Удалить',
  siteCount: 'Всего {count} сайтов',
  createSite: 'Создать сайт',
  siteName: 'Название сайта',
  siteUrls: 'URLs сайта',
  multiSepHint: 'Разделяйте элементы запятыми',
  add: 'Добавить',
  rename: 'Переименовать',
  inputHint: 'Введите содержимое...',
  userCreate: 'Создание пользователя',
  userEdit: 'Редактирование пользователя',
  userInConfCannotEditHint:
    'Пользователи, указанные в файле конфигурации, не поддерживают онлайн-редактирование. Пожалуйста, вручную отредактируйте файл конфигурации',
  userDeleteConfirm:
    'Это действие удалит пользователя "{name}" и его email "{email}" вместе со всеми комментариями, включая ответы других пользователей на его комментарии. Продолжить?',
  userDeleteManuallyHint:
    'Пользователь удален из базы данных. Пожалуйста, вручную отредактируйте файл конфигурации для удаления пользователя',
  pageDeleteConfirm:
    'Подтвердите удаление страницы "{title}"? Все связанные данные также будут удалены',
  siteDeleteConfirm:
    'Подтвердите удаление сайта "{name}"? Все связанные данные также будут удалены',
  siteNameInputHint: 'Пожалуйста, введите название сайта',
  comments: 'Комментарии',
  last: 'Последние',
  show: 'Показать',
  username: 'Имя пользователя',
  email: 'Электронная почта',
  link: 'Ссылка',
  badgeText: 'Текст значка',
  badgeColor: 'Цвет значка',
  role: 'Роль',
  normal: 'Обычный',
  password: 'Пароль',
  passwordEmptyHint: 'Оставьте пустым, если не хотите менять пароль',
  emailNotify: 'Уведомления по электронной почте',
  enabled: 'Включено',
  disabled: 'Отключено',
  save: 'Сохранить',
  dataFile: 'Файл данных',
  artransfer: 'Инструмент преобразования',
  targetSiteName: 'Имя целевого сайта',
  targetSiteURL: 'URL целевого сайта',
  payload: 'Параметры запуска',
  optional: 'Опционально',
  uploadReadyToImport: 'Файл успешно загружен, можно начинать импорт',
  artransferToolHint: 'Используйте {link} для преобразования данных комментариев в формат Artrans',
  moreDetails: 'Подробнее',
  loginFailure: 'Ошибка при входе',
  login: 'Войти',
  logout: 'Выйти',
  logoutConfirm: 'Вы уверены, что хотите выйти?',
  loginSelectHint: 'Пожалуйста, выберите аккаунт, с которым вы хотите войти:',
}

export default ru
