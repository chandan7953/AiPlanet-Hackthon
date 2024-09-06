import React from "react";
import clockIcon from "../assets/icons/clockicon.svg";
import skillLevel from "../assets/icons/skill-level-basic.svg";
import "./DetailPage.css";

const DetailPage = () => {
  return (
    <div className="detail-page">
      {/* Challenge Details */}
      <div className="challenge-details">
        <div className="challenge-header">
          <div className="challenge-start-time">
            <img src={clockIcon} alt="Clock Icon" />
            <span className="start-time-text">
              Starts on 17th Jun'22 09:00 PM (India Standard Time)
            </span>
          </div>
          <h1 className="challenge-title">
            Data Sprint 72 - Butterfly Identification
          </h1>
          <p className="challenge-description">
            Identify the class to which each butterfly belongs to
          </p>
          <div className="difficulty">
            <img
              src={skillLevel}
              alt="Difficulty"
              className="difficulty-icon"
            />
            <span className="difficulty-text">Easy</span>
          </div>
        </div>
      </div>

      <div className="overviewContainer">
        <h2 className="overview">Overview</h2>
        <div className="action-buttons">
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
      <div className="overview-discription">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab iure ex
          nam, quasi provident quibusdam. Distinctio cupiditate, hic nobis
          illum, repellendus magni, eos eaque incidunt odio voluptates deleniti
          debitis quam quia nemo consectetur! Distinctio repellendus quos
          deserunt, dignissimos voluptatum sunt eos laborum eius illo in omnis
          placeat minima assumenda quas fugit explicabo voluptates expedita nam
          possimus enim adipisci aperiam quod. Velit voluptatibus tempore fugiat
          dicta similique nam maxime consequuntur, exercitationem nesciunt
          assumenda dolorum eius, ab culpa fuga impedit porro reiciendis! Beatae
          dolores asperiores pariatur alias mollitia odio aspernatur at
          veritatis quaerat, porro nobis error consectetur, corporis quibusdam
          ipsum hic ad facere aut nemo fugiat. Quasi, dicta itaque accusantium
          quis incidunt dolores asperiores ea! Magni recusandae provident iusto,
          reprehenderit soluta, cum quasi id placeat dolores eos, non possimus
          nesciunt quae culpa porro ad maiores officiis assumenda aliquid
          inventore ipsam! Nisi aperiam cum minima ipsa, quisquam, fuga delectus
          laudantium animi molestiae officiis consequatur quaerat, a minus sunt
          dolor debitis velit officia. Consequatur illum culpa ullam a molestias
          nihil dolor dolore. Sint eos porro possimus cupiditate reiciendis
          perferendis eaque aperiam magni, nemo aliquid placeat fugit mollitia
          repellat debitis rerum! Odio necessitatibus ullam ipsam accusantium
          ipsum! Quia nobis, perferendis architecto quisquam ipsum dolore
          recusandae ipsa sit doloribus asperiores, mollitia reiciendis
          excepturi ratione esse fugiat, voluptates aut atque? Delectus laborum
          corrupti hic labore? Esse nostrum officia, provident aspernatur id
          reiciendis molestiae nesciunt sapiente quia at nisi. Obcaecati unde
          aliquam odit saepe? Obcaecati fugit quaerat tenetur excepturi nisi
          aperiam, aliquam sequi exercitationem aut reiciendis accusantium
          cupiditate, minus tempora iure qui sit praesentium totam, nobis harum
          vitae odio vel natus? Saepe, magnam dignissimos ullam blanditiis
          reprehenderit iste cumque sunt aperiam ea dolorum eligendi nihil
          perferendis suscipit natus quam molestiae ex itaque. Incidunt, cum,
          distinctio eos, cumque libero quam nihil ex beatae sapiente blanditiis
          deleniti eveniet. Sapiente ad perspiciatis, aut doloremque dolorem
          dicta sunt. Minima quisquam et recusandae magnam delectus esse
          sapiente beatae iste adipisci voluptatem? Accusantium, blanditiis.
          Blanditiis, laboriosam ducimus quos eum eius in eos amet iusto ab
          quaerat aliquam cupiditate alias consectetur rem incidunt nihil.
          Ducimus a labore perferendis temporibus delectus totam odio dolor.
          Iste quas veritatis nobis impedit? Earum nulla eum quis molestiae
          laboriosam aliquam neque ipsa excepturi qui incidunt autem vel, cum
          dicta ea deserunt nam molestias iste unde officiis nemo. Commodi nobis
          quidem dolore officia ratione laudantium! Sit obcaecati itaque
          molestiae hic consectetur, blanditiis dolores quasi facilis atque eum
          iste odio et consequuntur.
        </p>
      </div>
    </div>
  );
};

export default DetailPage;
