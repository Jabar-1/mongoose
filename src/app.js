require("./db/connection");
const { add,list } = require("./utils")
const yargs = require("yargs");
const command = process.argv[2];
const title = yargs.argv.title;
const actor = yargs.argv.actor;
const watched = yargs.argv.watched;


const app = () => {
    if(command === "add"){
        //add function goes here //
        if(actor){
         add({title : title, actor: actor});   
        } else {
            add({title : title});
        }
    }else if (command === "list"){
        //list function would go here//
        if (actor) {
            list({title: title, actor: actor})
            
        } else {
            list({title: title})
        }  
    } else if (command === "update") {
        if(watched) {
            update({ title: title }, { watched: true });
        } else if (actor) {
          update({ title: title }, { actor: actor });
        }
         console.log("List has Been Updated Successfully");
        
    } else if (command === "delete") {
        if (actor) {
            remove({ title: title, actor: actor })
        } else {
            remove({ title: title })
        }
    }

};

app();