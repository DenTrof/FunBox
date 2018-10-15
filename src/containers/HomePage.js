import React from 'react';
import CatImg from 'assets/img/prototype_cat.png';


const divStyle = {paddingTop:'20px'}

export default class HomePage extends React.Component {
    componentDidMount() {
        const items = document.querySelector('.content');
        items.addEventListener("click", function (e) {

            const id = e.target.id;
            const choiсeId = document.getElementById(`${id}`);
            const choiсeIdBorder = document.getElementById(`${id}1`);
            choiсeId.classList.toggle("red");
            choiсeIdBorder.classList.toggle("red");
        });
    }

    onclick = () => {
        const id = e.target.id;
        const choiсeId = document.getElementById(`${id}`);
        const choiсeIdBorder = document.getElementById(`${id}1`);
        choiсeId.classList.toggle("red");
        choiсeIdBorder.classList.toggle("red");
    }
   
    render() {
        return (
            <div className="content">
                <div class="content_col">
                    <div id="content_min_11" className="content_min">
                        <div key="k-01" class="content_item" style={{ backgroundImage: `url(${CatImg})` }}>
                            <div className="content_item_text">
                                <h4 style={divStyle}>Сказачное заморское явство.</h4>
                                <div className="niam">
                                    <h2>Нямушка</h2>
                                    <h3>с фуа-гра</h3>
                                </div>
                                <div>
                                    <h4>10 порций.<br />Мышь в подарок</h4>
                                </div>
                            </div>
                            <div className="cercle_main">
                                <div id="content_min_1" className="cercle select">
                                    <span id="content_min_1" className="price select">0,5</span>
                                    <span id="content_min_1" className="select">кг</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Чего сидишь порадуй кота,<span id="content_min_1" onClick={this.onclick}> купи.</span></p>
                </div>
                <div class="content_col">
                    <div id="content_min_21" className="content_min">
                        <div key="k-02" class="content_item" style={{ backgroundImage: `url(${CatImg})` }}>
                            <div className="content_item_text">
                                <h4 style={divStyle}>Сказачное заморское явство.</h4>
                                <div className="niam">
                                    <h2>Нямушка</h2>
                                    <h3>с фуа-гра</h3>
                                </div>
                                <div>
                                    <h4>10 порций.<br />Мышь в подарок</h4>
                                </div>
                            </div>
                            <div className="cercle_main">
                                <div id="content_min_2" className="cercle select">
                                    <span id="content_min_2" className="price select">0,5</span>
                                    <span id="content_min_2" className="select">кг</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Чего сидишь порадуй кота, <span id="content_min_2" onClick={this.onclick}>купи.</span></p>
                </div>
                <div class="content_col">
                    <div id="content_min_231" className="content_min grey">
                        <div key="k-03" className="content_item desabled" style={{ backgroundImage: `url(${CatImg})` }}>
                            <div className="content_item_text">
                                <h4 style={divStyle}>Сказачное заморское явство.</h4>
                                <div className="niam">
                                    <h2>Нямушка</h2>
                                    <h3>с фуа-гра</h3>
                                </div>
                                <div>
                                    <h4>10 порций.<br />Мышь в подарок</h4>
                                </div>
                            </div>
                            <div id="content_min_31" className="cercle_main ">
                                <div className="cercle grey">
                                    <span className="price">0,5</span>
                                    <span>кг</span></div>
                            </div>
                        </div>
                    </div>
                    <p>Чего сидишь порадуй кота, <span >купи.</span></p>
                </div>
            </div>
        )
    }
}








