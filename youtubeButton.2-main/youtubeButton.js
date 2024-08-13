if(window.location.pathname.indexOf('/debug/')<0){
  const youtubeStyle=document.createElement('style');
  youtubeStyle.innerText=`

      .youtubeLink {
          position: fixed;
          font-size: 16px;
          bottom: 0;
          right: 0;
          width: 2.5em;
          height: 2.5em;
          border-radius: 100% 0 0 0 / 100% 0 0 0;
          background-color: #777;
          box-shadow: 0 0 5px #0007;
          transform-origin: bottom right;
          transition: all 0.25s;
          cursor: pointer;
          z-index: 9999;
      }

      .youtubeLink:hover {
          background-color: #00a2f5;
          box-shadow: 0 0 10px #000;
          transform: scale(1.25);
      }

      .youtubeIcon {
          position: absolute;
          bottom: 0.2em;
          right: 0.2em;
          width: 1.5em;
          height: 1.5em;
          filter: drop-shadow(0 0 2px #0007);
      }
  `;
  document.querySelector('head').appendChild(youtubeStyle);
  const youtubePath="https://www.youtube.com/@wasimulkarimniloy/";
  const youtubeLink=document.createElement('a');youtubeLink.classList="youtubeLink"
youtubeLink.addEventListener('click',()=>{window.open(youtubePath,'_top');})
const youtubeIcon=document.createElement('img');
youtubeIcon.classList="youtubeIcon"
youtubeIcon.src="https://dl.dropbox.com/s/yo1dwhqlyi4u6uz/youtube.png";
youtubeLink.appendChild(youtubeIcon);
document.querySelector('body').appendChild(youtubeLink);}
