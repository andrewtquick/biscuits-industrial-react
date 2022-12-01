const Location = () => {
    return (
    <div className="Location">
        <legend>Select your Location</legend>
            <select className="forum-select" id="BPO">
                <option value="Highsec">Highsec</option>
                <option value="Lowsec">Lowsec</option>
                <option value="Null/WormHole">Null/WormHole</option>
            </select>
    </div>  
    )
}
export default Location;