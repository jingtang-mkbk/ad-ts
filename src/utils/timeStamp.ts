export function yyyymmdd(timeStamp: number | string, strType: string) {

  const date = new Date(timeStamp);
  const Y = date.getFullYear() + strType;
  const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + strType;
  const D = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
  // h = date.getHours() + ':';
  // m = date.getMinutes() + ':';
  // s = date.getSeconds(); 

  return (Y+M+D)
}