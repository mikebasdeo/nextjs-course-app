declare module 'http' {
  interface IncomingMessage {
    query: any
    body: any
  }
  interface ServerResponse {
    status: any
    json: any
    send:any
  }
}
