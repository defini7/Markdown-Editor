function download(filename: string, text: string) {
    let a = document.createElement('a')

    a.setAttribute('href', `data: text/plain; charset=utf-8, ${encodeURIComponent(text)}`)
    a.setAttribute('download', filename)

    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

function onDownloadClick() {
    const filename = document.getElementById('download-filename') as HTMLInputElement
    const div = document.getElementById('output') as HTMLTextAreaElement

    download(filename.value + '.html', div.innerHTML)
}

export function Output() {
    return (
        <div className="inCol" id="containerOutput">
            <div id="output"></div>
            <div className="inRaw justify-right">
                <input id="download-filename" type="text" placeholder="Filename"></input>
                <button id="download" onClick={onDownloadClick}>Save in HTML</button>
            </div>
        </div>
    )
}