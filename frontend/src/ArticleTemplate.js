import "./Article.css";
import samsommer from "./images/samsommer.jpg"

const ArticleTemplate = () => {
    return (
        <div className="article-template">
            <div className="article-header">
                <div className="article-title">
                    <h5>Aesthetics of the Ocean</h5>
                </div>
                <div className="date-author">
                    <h6>Timothy Caryl</h6><h6>February 28, 2025</h6> 
                </div>
            </div>
            <div className="article-content">
                <div className="article-left">
                    
                </div>
                <div className="article-body">
                    <section>
                        <div className="h7">
                            The Ocean
                        </div>
                        <p>
                            The ocean has long been a source of inspiration, awe, and contemplation for humanity. Its vastness, power, and beauty evoke a profound sense of wonder that is both humbling and invigorating. The aesthetics of the ocean are multifaceted, encompassing not only its visual splendor but also the sounds, smells, and sensations it offers.
                        </p>
                        <div className="article-img">
                            <img src={samsommer} alt="samsommer"/>
                            <small>Samsommer - a sample photo of the sea</small>
                        </div>
                    </section>
                    <section>
                        <div className="h7">
                            Visual Majesty
                        </div>
                        <p>
                            One of the most striking aspects of the ocean is its ever-changing color palette. From the deep, mysterious blues of the open sea to the vibrant turquoise of tropical waters, the ocean's hues are a visual feast. The way light interacts with the water creates a mesmerizing effect, with the surface reflecting the sky, yet offering glimpses into the depths below. Sunrises and sunsets over the ocean are particularly enchanting, as the sky's colors blend seamlessly with the water, creating a horizon that seems to stretch into infinity.
                        </p>
                        <p>
                            The rhythmic motion of the waves adds to the ocean's aesthetic appeal. Whether it's the gentle lapping of waves on a calm day or the powerful surge of a stormy sea, the movement of water is both soothing and dynamic. The patterns formed by waves as they crash against the shore or roll across the open water are endlessly captivating, drawing the eye and calming the mind.
                        </p>
                    </section>
                    <section>
                        <div className="h7">
                            Sounds and Sensations
                        </div>
                        <p>
                            The sound of the ocean is another key element of its aesthetic experience. The gentle whoosh of waves, the distant call of seabirds, and the occasional crash of a breaking wave create a natural symphony that is both relaxing and invigorating. This auditory landscape is often described as meditative, providing a soundtrack that encourages reflection and  mindfulness.
                        </p>
                        <p>
                            In addition to the sounds, the ocean offers a tactile experience like no other. The feel of sand between the toes, the cool caress of seawater on the skin, and the warmth of the sun on a breezy day contribute to the sensory richness of the ocean environment. These sensations are often associated with relaxation and escape, making the ocean a sought-after destination for those seeking respite from the stresses of daily life.
                        </p>
                    </section>
                </div>
                <div className="article-right">
                    
                </div>
            </div>
        </div>
    );
}
 
export default ArticleTemplate;