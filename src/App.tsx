import './App.css'

import { Remarkable } from 'remarkable'

const md = new Remarkable()

function download(filename: string, text: string) {
  let a = document.createElement('a')

  a.setAttribute('href', `data:text/plain;charset=utf-8, ${encodeURIComponent(text)}`)
  a.setAttribute('download', filename)

  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

function onDownloadClick() {
  const filename = document.getElementById('filename') as HTMLInputElement
  const textarea = document.getElementById('output') as HTMLTextAreaElement

  download(filename.value + '.html', textarea.innerHTML)
}

function onInputChange(evt: any) {
  const outputDiv = document.getElementById('output') as HTMLDivElement
  
  const input = evt.target.value
  outputDiv.innerHTML = md.render(input)
}

export default function App() {
  return (
    <div className="App">
      <textarea id="input" placeholder="Write your markdown here..." onChange={onInputChange}></textarea>
      <div className="inCol">
        <div id="output"></div>
        <div className="inRaw">
          <input id="filename" type="text" placeholder="Filename"></input>
          <button id="download" onClick={onDownloadClick}>Save in HTML</button>
        </div>
      </div>
    </div>
  )
}
