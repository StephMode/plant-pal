import Form from "/components/Form";

export default function AddPlantPage ({handleAddPlant,}){
    return(
        <main>
            <Form handleAddPlant={handleAddPlant} buttonText={"Add"} />
        </main>
    );
}