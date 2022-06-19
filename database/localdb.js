import * as SQLite from 'expo-sqlite';
import Song from '../models/Song';

const db = SQLite.openDatabase("tagton.db");

export const initDB = () => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(`CREATE TABLE IF NOT EXISTS songs (
                id INTEGER PRIMARY KEY,
                title TEXT NOT NULL,
                altTitle TEXT,
                tones TEXT NOT NULL
            )`, [],
            (tx, res) => resolve(res.rows._array),
            (tx, err) => reject(err)
            )
        })
    })
}

export const findAll = () => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(`SELECT * FROM songs`, [],
            (tx, res) => resolve(res.rows._array
                .map(song => new Song(song.id, song.title, song.tones, song.altTitle))),
            (tx, err) => reject(err))
        })
    })
}

export const insert = (song) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                `INSERT INTO songs (title, altTitle, tones)
                VALUES (?, ?, ?)`, [song.title, song.altTitle, song.tones],
                (tx, res) => resolve(res),
                (tx, err) => reject(err)
            )
        })
    })
}

export const deleteById = (id) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                `DELETE FROM songs WHERE id = ?`, [id],
                (tx, res) => resolve(res),
                (tx, err) => reject(err)
            )
        })
    })
}