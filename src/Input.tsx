import { Remarkable } from 'remarkable'

const md = new Remarkable()

function upload(file: File) {
    file.text().then((text) => {
        const textArea = document.getElementById('input') as HTMLTextAreaElement
        textArea.value = text

        const outputDiv = document.getElementById('output') as HTMLDivElement
        outputDiv.innerHTML = md.render(text)
    }).catch((err) => {
        console.log(err)
    })
}

function onUploadClick() {
    const input = document.getElementById('upload-file') as HTMLInputElement
    const files = input.files

    if (files) {
        upload(files[files.length - 1])
    }
}

function onInputChange() {
    const outputDiv = document.getElementById('output') as HTMLDivElement
    const textArea = document.getElementById('input') as HTMLTextAreaElement

    outputDiv.innerHTML = md.render(textArea.value)
}

export function Input() {
    return (
        <div className="inCol" id="containerInput">
            <textarea id="input" placeholder="Write your markdown here..." onChange={onInputChange}></textarea>
            <div className="inRaw">
                <button id="upload" onClick={onUploadClick}>Upload MD</button>
                <input id="upload-file" type="file" placeholder="File"></input>
            </div>
        </div>
    )
}