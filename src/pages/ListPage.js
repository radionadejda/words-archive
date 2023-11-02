import React from 'react';

import '../styles/_list.scss';

import { WordList } from '../components/WordList/WordList.jsx';
import { Button } from '../components/Button/Button.jsx';

import { words } from '../data/data.js';

export function ListPage() {
    return (
        <div className="App">
            <div className="WordList">
                <div className="word">
                    <h2 className="title">слово</h2>
                    <div className="description">
                        <div className="text">транскрипция</div>
                        <div className="text">перевод</div>
                        <div className="text">теги</div>
                    </div>
                    <div className="edit">
                        <Button name="Add" />
                    </div>
                </div>
                {words.map((word, id) => <WordList key={id} word={word} />)}
            </div>
        </div>
    );
}
