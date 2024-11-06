export default function AddPlantForm (){

    return(
        <>
            <h2>Add plant</h2>
            <form>
                <fieldset>
                    <label htmlFor="plantName">
                    Plant name:
                    </label>
                    <input id="plantName" name="name" type="text" placeholder="e.g. Monstera" required></input>
                </fieldset>
                <fieldset>
                <label htmlFor="botanicalPlantName">
                  Botanical plant name:
                </label>
                <input id="botanicalPlantName" name="botanicalName" type="text" placeholder="e.g. Monstera deliciosa" required></input>
                </fieldset>
                <fieldset>
                <label htmlFor="plantDescription">
                  Description:
                </label>
                <textarea id="plantDescription" name="description" type="text" placeholder="e.g. Monstera deliciosa, also known as the Swiss cheese plant"></textarea>
                </fieldset>
                <fieldset>
                    <legend> Light needs </legend>
                    <label>
                        <input name="lightNeed" type="radio" value="Full Shade" required/>
                        Full Shade
                    </label>
                    <label>
                        <input name="lightNeed" type="radio" value="Partial Shade" required/>
                        Partial Shade
                    </label>
                    <label>
                        <input name="lightNeed" type="radio" value="Full Sun" required/>
                        Full Sun
                    </label>
                </fieldset>
                <fieldset>
                    <legend> Water needs </legend>
                    <label>
                        <input name="waterNeed" type="radio" value="Low" required/>
                        Low
                    </label>
                    <label>
                        <input name="waterNeed" type="radio" value="Medium" required/>
                        Medium
                    </label>
                    <label>
                        <input name="waterNeed" type="radio" value="High" required/>
                        High
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Fertiliser Season</legend>
                    <input name="fertiliserSeason" type="checkbox" value="Spring"/>
                    <label>Spring</label>
                    <input name="fertiliserSeason" type="checkbox" value="Summer"/>
                    <label>Summer</label>
                    <input name="fertiliserSeason" type="checkbox" value="Fall"/>
                    <label>Fall</label>
                    <input name="fertiliserSeason" type="checkbox" value="Winter"/>
                    <label>Winter</label>
                </fieldset>
                <button type="submit">Add plant</button>
            </form>
        </>
    )
}