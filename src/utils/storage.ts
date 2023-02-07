const TS_ADMIN_TOKEN = "TS_ADMIN_TOKEN"
const TS_ADMIN_TIMESTAMP = "TS_ADMIN_TIMESTAMP"

export const setToken = (token: string) => {
  localStorage.setItem(TS_ADMIN_TOKEN, token)
}

export const getToken = () => {
  return localStorage.getItem(TS_ADMIN_TOKEN)
}

export const removeToken = () => {
  localStorage.removeItem(TS_ADMIN_TOKEN)
}

export const setTimeStamp = () => {
  localStorage.setItem(TS_ADMIN_TIMESTAMP, String(Date.now()))
}

export const getTimeStamp = () => {
  return localStorage.getItem(TS_ADMIN_TIMESTAMP)
}

export const removeTimeStamp = () => {
  localStorage.removeItem(TS_ADMIN_TIMESTAMP)
}