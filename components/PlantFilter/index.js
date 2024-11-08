

export default function PlantFilter({ handleFilterPlant }) {


    return (
        <>
        <p>Filter options</p>
            <button type="button" onClick={() => handleFilterPlant("Full Sun")}>full sun</button>
            <button type="button" onClick={() => handleFilterPlant("Partial Shade")}>partial shade</button>
            <button type="button" onClick={() => handleFilterPlant("Full Shade")}>full shade</button>
            <button type="button">reset</button>
        </>
    )
};