import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const user = {
  name: "Anakin Skywalker",
  avatar: "https://cdna.artstation.com/p/assets/images/images/040/927/498/large/yan-nikolaychik-img-20210830-040238-065.jpg?1630285449",
  nickname: "@dart_vader",
  post: {
      date: "26.02.2019",
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      media: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7777586-56a6-45a1-ae8e-c29a1ddfe00f/ddpqxt2-c37793fe-683e-45fd-a5ab-effdf8c7b611.jpg/v1/fill/w_1280,h_749,q_75,strp/rey_skywalker_with_new_lightsaber_by_chantalart6_ddpqxt2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzQ5IiwicGF0aCI6IlwvZlwvYzc3Nzc1ODYtNTZhNi00NWExLWFlOGUtYzI5YTFkZGZlMDBmXC9kZHBxeHQyLWMzNzc5M2ZlLTY4M2UtNDVmZC1hNWFiLWVmZmRmOGM3YjYxMS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.e-c-Khs4BHHq-03xUO4edTcvW-BjOUM8EyfnXGgCrxU"
  }
}

function Post ( ) {
  return (
      <div className="post flex-column">
          <div className="post-head flex-row">
              <img className="post-head__avatar" src={user.avatar} alt="avatar" />
              <h1 className="post-head__name">{user.name}</h1>
              <p className="post-head__nickname">{user.nickname}</p>
              <p className="post-head__date">{user.post.date}</p>
          </div>
          <div className="post-main flex-column">
              <p className="post-main__content">{user.post.content}</p>
              <img className="post-head__media" src={user.post.media} alt="media" />
              <div className="post-main__reactions flex-row">
                  <img src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" alt="comment"/>
                  <img src="https://cdn3.iconfinder.com/data/icons/social-1/100/retweet-512.png" alt="retweet"/>
                  <img src="https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/like-106.png" alt="like"/>
                  <img src="https://cdn-icons-png.flaticon.com/512/724/724933.png" alt="download"/>
              </div>
          </div>
      </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Post />
);
