import React, { useState } from 'react'

function RecipeList(props) {

    const [recipe, setrecipe] = useState([
        {
            id: 1,
            name: 'Gulaab Jamoon',
            howtodo:'A sticky dough made of skimmed milk powder, wheat flour, baking soda, cardamom and whole cream is kneaded and turned by hand into smooth balls. The balls are fried in oil, at a moderate temperature, until they are golden brown. Swelling to double their size, the balls are then soaked for about 20 minutes in a warm syrup made from white sugar and rose water. The gulab jamuns can then be garnished with chocolate, ground coconut or chopped pistachios.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAyuWgr8aAaV5qT6iA6E5vnUigiSFNWEiUwg&usqp=CAU'
        },
        {
            id: 2,
            name: 'Rasgulla',
            howtodo: `Bring the milk to boil over medium flame. Mix lemon juice with 2 tablespoons water.`,
            image: 'http://faridascookbook.com/wp-content/uploads/2019/07/Rasgulla-2-1-683x1024.jpg'
        },
        {
            id:3,
            name:'Peda',
            howtodo:` First grate 200 to 205 grams (about 7.05 oz) of homemade or store bought khoya. You will need 1 cup tightly packed grated khoya.

            Add this to a deep pan or kadai. Use a heavy and thick bottomed pan so that the khoya mixture does not brown or burn at the bottom.Add ½ cup sugar (125 grams) and ½ teaspoon cardamom powder.Set the heat to low. Then mix in the khoya with the sugar.Mix evenly and very well.Now add 2 to 3 tablespoons milk.Mix well. You will see the sugar melting and the mixture becomes more of a liquid.Simmer the mixture on low heat while stirring continuously.You have to stir non-stop so that the mixture does not get browned or stick to the bottom of the pan with a wooden spatula.Soon the mixture will start to bubble as you stir.Continue to stir and cook until the mixture thickens, and starts to pull away from the side of the pan.In the below photo you can see how the mixture has thickened, condensed and leaves the side of the pan. The color will also change.Immediately pour the entire molten peda mixture onto a steel plate or tray. It should be thick but still spread a bit. Be sure that you do not overcook the peda before attempting to pour, or the fudge will become chewy. Let the mixture cool to room temperature.In the below photo the mawa peda mixture has become lukewarm.Now take small portions from the lukewarm peda mixture and roll them into small-to-medium balls. They should be about the size of a small to medium lime. With a peda maker or peda press, gently press each ball to flatten and shape the milk fudge. If you don’t have a peda maker you can simply use a flat-bottomed bowl or a small steel glass to press them into a thick disc shape.

            You can also roll the mixture in balls between your palms and then flatten them. Press lightly a few almonds or pistachios on top in the center.

            `,
            image:'data:image/jpeg;base64,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'
        }
    ])
    let sendRecipe = (index) => {
        let sendfood = recipe[index];
        props.getData(sendfood);
    }
    return (
        <div>
            <div className='recipe-list col md-4 border ms-4 mt-2 px-4 py-3' style={{float:'left'}}>
                <h2>Items</h2>
                {recipe.map((val, idx) => {
                    return <div key={idx}>
                        <div className="card mb-4" onClick={() => sendRecipe(idx)} style={{ width: '18rem' }}>
                            <div>{val.id}</div>
                            <img src={val.image} className="card-img-top" alt={val.name} />
                            <div className="card-body mb-1">
                                <h3 className="card-text">{val.name}</h3>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default RecipeList
