const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '今日は気温 摂氏-1度で外は寒かった。:insertx:は外へ出かけた。:inserty:へいく道中で、大きな池が凍っていた。:insertx:は、そこでスケートをしようと凍った池の上に乗っかると、:insertz:。:insertx:はあまりのショックに一回自分の家に帰ることにした。それを見ていた体重50㎏の:insertx:は驚いていたがBobは笑っていた。';
let insertX = ['津田梅子さん','ドナルド','安倍晋三'];
let insertY = ['友達の家','スーパー','恋人の家'];
let insertZ = ['氷が割れて池に落っこちた','滑って転んでけがをした','池の管理人に怒られた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("日本").checked) {
    const weight = Math.round(300*0.0714286) + 'ポンド';
    const temperature =  '華氏' + Math.round((94-32) * 5 / 9);
    newStory = newStory.replace('摂氏-1度',temperature);
    newStory = newStory.replace('体重50kg',weight);
  }


  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
