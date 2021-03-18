import React from 'react'

function WordList(props) {
    return (
        <div>
            WordList Here!

            {props.words.map(word =>
                <div key={word.id}>
                    <p>{word.spelling}</p>
                </div>

            )}

        </div>
    )
}

export default WordList
