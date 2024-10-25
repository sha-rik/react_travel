import Card from './Card.js';
function Tours(props)
{
    return (
        <div>
            <div>
                <h2>Play</h2>
            </div>
            <div>
                {
                    props.tours.map((tour)=>{
                        return (
                            
                            <Card key={tour.id} {...tour} removeTour={props.removeTour}></Card>
                        );
                    })
                }
            </div>
        </div>
    );
}
export default Tours;