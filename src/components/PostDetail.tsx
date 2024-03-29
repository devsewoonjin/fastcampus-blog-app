import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <div className="post__detail">
      <div className="post__box">
        <div className="post__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="post__profile-box">
          <div className="post__profile" />
          <div className="post__author-name">패스트캠퍼스</div>
          <div className="post__date">2023.0708 토요일</div>
        </div>
        <div className="post__utils-box">
          <div className="post__delete">
            <Link to="/">삭제</Link>
          </div>
          <div className="post__edit">
            <Link to={`${"posts/edit/1"}`}>수정</Link>
          </div>
        </div>
        <div className="post__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam at
          dolore, optio repellat voluptatum qui nulla, architecto totam commodi
          ex quod quo suscipit maxime necessitatibus veritatis reiciendis ad
          quibusdam molestias! Deserunt doloremque fuga corrupti! Cupiditate
          itaque, ab maiores omnis tempore blanditiis eum pariatur esse impedit
          dicta magni vel tempora nulla non praesentium odio illo doloribus
          dignissimos. Dolorem exercitationem alias neque. Qui nihil suscipit
          accusamus unde placeat? Fugiat optio, quos pariatur eaque eum quod
          facilis dolorem iusto asperiores ut doloribus necessitatibus cumque
          sunt. Hic natus tenetur blanditiis delectus corporis eveniet! Neque.
          Ut ipsam, harum laboriosam tempora sequi quia, iure iste error itaque
          delectus veniam magnam incidunt molestias suscipit doloribus in ipsum
          quidem! Ullam ut odio soluta excepturi, facere ducimus suscipit
          numquam. Officia, rerum. Expedita veniam provident, adipisci nam ea
          quis similique beatae aliquam cum. Veritatis reprehenderit eos ratione
          dolore expedita quam perferendis quasi? Eum eligendi, tempora fugiat
          magnam fugit deleniti perferendis!
        </div>
      </div>
    </div>
  );
}
