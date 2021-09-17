fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => selectPost(json))

  
selectPost=(json)=>{

    for(i=0;i<8;i++)
    {
        const randomIndex=Math.floor(Math.random()*100);
        const gridItem=document.createElement('div');
        gridItem.className='grid-item';
        const gridImageArea=document.createElement('div');
        gridImageArea.className='grid-image-area';
        const gridImage=document.createElement('img');
        gridImage.src=`https://picsum.photos/id/${randomIndex}/200/200`;
        const gridContentArea=document.createElement('div');
        gridContentArea.className="grid-content-area";
        gridContentArea.innerHTML=`<h4 class="title">${json[randomIndex].title}</h4><p>${json[randomIndex].body}</p>`
        gridImageArea.appendChild(gridImage);
        gridItem.appendChild(gridImageArea)
        gridItem.appendChild(gridContentArea);
        const gridButton=document.createElement('button');
        gridButton.innerText="Detay"
        gridItem.appendChild(gridButton)
        grid.appendChild(gridItem);
        
    }    
}

const grid=document.querySelector('.grid');
const form=document.querySelector('#form');
form.classList.add('change-tab');

function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}


const Search=()=>{
  const query=document.getElementById('search-text').value;
  const val=document.querySelectorAll(".title").length;

  if(query.length===0)
  {
    for(i=0;i<val;i++)
    {
      document.querySelectorAll('.title')[i].parentElement.parentElement.style="display:block";

    }
  }
  else{
    
    for(i=0;i<val;i++)
    {
      if(document.querySelectorAll('.title')[i].innerHTML.indexOf(query)===-1)
      {
        document.querySelectorAll('.title')[i].parentElement.parentElement.style="display:none";
      }  
      else
      {
      document.querySelectorAll('.title')[i].parentElement.parentElement.style="display:block";
      }
    }
  } 
}

const SearchInputChange = debounce(() => Search());

document.querySelector('.menu').addEventListener('click',(a)=>{
  document.getElementById('menu').classList.toggle('change');
  document.getElementById('nav').classList.toggle('change');
  document.getElementById('menu-bg').classList.toggle('change-bg');
})




document.getElementById('cards').addEventListener('click',()=>{
  
  grid.style='display:grid'
  form.classList.add('change-tab');
})

document.getElementById('forms').addEventListener('click',()=>{
  grid.style='display:none'
  form.classList.remove('change-tab');
})


form.addEventListener('submit',(a)=>{
  const company=document.getElementById('company').value;
  const firstname=document.getElementById('first-name').value;
  const lastname=document.getElementById('last-name').value;
  const email=document.getElementById('email').value;
  const title=document.getElementById('title').value;
  const phone=document.getElementById('phone').value;
  const registration=document.getElementById('registration').checked;
  const date=document.getElementById('date').value;
  const job=document.querySelector('input[name="job_func"]:checked').value;
  const dieatary=document.getElementById('dietary').value;
  const expectations=document.getElementById('expectations').value;
 
  console.log({company});
  console.log({firstname});
  console.log({lastname});
  console.log({email});
  console.log({title});
  console.log({phone});
  console.log({registration});
  console.log({date});
  console.log({job});
  console.log({dieatary});
  console.log({expectations});


  a.preventDefault();
})


