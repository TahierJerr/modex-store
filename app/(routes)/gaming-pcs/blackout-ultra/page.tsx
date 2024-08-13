import getComputer from "@/actions/get-computer";

const BlackoutUltraPage = async () => {

    const computer = await getComputer("31d361ce-ead0-4e95-a75a-1b3b656136a1");

    return (
        <div>BlackoutUltraPage</div>
    )
}

export default BlackoutUltraPage