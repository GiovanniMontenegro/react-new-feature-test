
export type RequestOption = {
    path: string,
    onSuccess: Function,
    onFail: Function
}

export async function get(options: RequestOption){
    await fetch(options.path)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
        console.log("On success: ",json)
      options.onSuccess(json)
    }).catch(function(error) {
        console.log("On Fail: ",error)
      options.onFail(error+"")
    })
}
