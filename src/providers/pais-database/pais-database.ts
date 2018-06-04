import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { Pais } from '../../modelo/pais';
import { SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class PaisDatabaseProvider {

  constructor(public db: DatabaseProvider) {
    console.log('Hello PaisDatabaseProvider Provider');
  }

  public inserir (pais: Pais){
    return this.db.openDatabase().
    then((db:	SQLiteObject)=>{
      let sql =	"INSERT	INTO	pais	(nome,	continente)	VALUES	(?,	?)";
      let parametros =	[pais.pais,	pais.continente];
      return db.executeSql (sql,	parametros).
    catch ((e)	=> {
      console.log(e);
    });
    }).catch ((e)=>{
      console.log(e);
    });
  }

  public listar (){
    return this.db.openDatabase().then((db:	SQLiteObject)=>{
        let sql =	"SELECT	*	FROM pais";
      return db.executeSql (sql,	[]).then((data:	any)	=>{
        if (data.rows.length >	0){
          let paises:	Pais[]	=	[];
          for (let i =	0;	i <	data.rows.length;	i++){
            paises.push(data.rows.item(i));
          }
          console.log(paises);
          return paises;
        } else
          return [];
      });
    }).catch((e)	=>{
      console.log(e);
    });
  }
}
