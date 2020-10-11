function toggleQuestion(id) {
  answer = document.querySelectorAll('#question-' + id + ' .answer')[0]
  arrow = document.querySelectorAll('#question-' + id + ' span')[0]

  if (getComputedStyle(answer)['height'] != '0px') {
    answer.style.height = '0px'
    arrow.innerHTML = 'arrow_drop_down'
  } else {
    answer.style.height = '100%'
    arrow.innerHTML = 'arrow_drop_up'
  }
}

var request = new XMLHttpRequest()
request.open('GET', 'data.json', true)

request.onload = function () {
  if (this.status >= 200 && this.status < 400) {
    var data = JSON.parse(this.response)
    data = data['rows']
    for (var i = 0; i < data.length; i++) {
      html =
        `<div id="question-` +
        (i + 1) +
        `" class="item">
					<div class="question" onclick="toggleQuestion('` +
        (i + 1) +
        `')">
						<p>` +
        (i + 1) +
        '. ' +
        data[i]['title'] +
        `</p>
						<span class="material-icons">arrow_drop_down</span>
					</div>
					<div class="answer">
						<p>` +
        data[i]['content'] +
        `</p>
					</div>
				</div>`
      elem = document.createElement('div')
      elem.innerHTML = html
      elem.className = 'item'
      elem.id = 'question-' + (i + 1)
      document.getElementsByClassName('items')[0].appendChild(elem)
    }
  } else {
    // Error
  }
}

request.send()

