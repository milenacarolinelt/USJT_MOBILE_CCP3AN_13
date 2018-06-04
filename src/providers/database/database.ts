import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseProvider {

  constructor(private db :	SQLite) {
    console.log('Hello DatabaseProvider Provider');
  }

  openDatabase (){
    return this.db.create ({
    name:"pais.db",
    location: "default"
    });
  }

  createDatabase (){
    return this.openDatabase ().
      then((db:	SQLiteObject)	=>{
      this.createTabelaPais(db);
      });
  }
  createTabelaPais (db:	SQLiteObject){
    let sql:	string =	"CREATE	TABLE	IF	NOT	EXISTS	pais	(id	INTEGER	PRIMARY	KEY	AUTOINCREMENT,	" +
    "	nome	VARCHAR	(200),	continente	VARCHAR(200))";
    db.executeSql (sql,	{});
  }
}
