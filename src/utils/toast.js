export function toast(message,type = 'success',offset = 100){
    ElNotification({
        message,
        type,
        duration: 3000,
        offset,
      })
}