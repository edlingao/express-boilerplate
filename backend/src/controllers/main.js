export default class MainController { 

  constructor(){}

  /*
  * GET
  * @returns {object}
  */
  sayHello(req, res) {
    res.json({
      message: 'Hello World from express on: http://localhost:8080'
    })
  }

}