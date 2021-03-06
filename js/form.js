class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("play")
        this.greeting=createElement("h3")
        this.resetbutton=createButton("reset")
    }
    display(){
        var title=createElement("h2")
        title.html("car racing game")
        title.position(displayWidth/2-50,0)
        this.reset()
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.button.mousePressed(()=>{
           this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playercount+=1
            player.index=playercount
            player.update()
            player.updatecount(playercount)
            this.greeting.html("hello"+player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    reset(){
        this.resetbutton.position(1000,30)
        this.resetbutton.mousePressed(()=>{
            player.updatecount(0)
            game.update(0)
        })
        }
}