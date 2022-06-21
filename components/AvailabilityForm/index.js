import {useState, useEffect} from 'react';
import Button from '../Button';

const AvailibityForm = (props) => {
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!month || !day || !year) {
            setError('Please select a date before submitting.');
            return;
        }

        const url = `https://rockstardjstlplanning.com/check_availability.asp?djidnumber=8512`;
        const win = window.open(url, '_blank');
        win.focus();

        setMonth('');
        setDay('');
        setYear('');
    };

    return (
        <form>
            <div
                style={{
                    color: 'var(--orange)',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: '15px',
                }}>
                Check Availability
            </div>
            <div style={{fontWeight: 'bold', textAlign: 'center', marginBottom: '5px'}}>
                Select the Date of Your Event
            </div>
            <div
                style={{
                    color: 'var(--gray-300)',
                    textAlign: 'center',
                    marginBottom: '15px',
                }}>
                Then click on the "Submit" button below
            </div>
            <label htmlFor="month">Month:</label>
            <select
                id="month"
                name="month"
                onChange={(e) => {
                    setMonth(e.target.value), setError('');
                }}>
                <option value="">...</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
            <label htmlFor="day">Day:</label>
            <select
                id="day"
                name="day"
                onChange={(e) => {
                    setDay(e.target.value), setError('');
                }}>
                <option value="">...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>
            <label htmlFor="year">Year:</label>
            <select
                id="year"
                name="year"
                onChange={(e) => {
                    setYear(e.target.value), setError('');
                }}>
                <option value="">...</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
            {error && <span>{error}</span>}
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
            <style jsx>
                {`
                    form {
                        border: 1px solid var(--gray-200);
                        border-radius: 5px;
                        padding: 30px 15px;
                        width: 100%;
                        box-shadow: 0px 0px 10px rgba(000, 000, 000, 0.06);
                        font-family: var(--font-primary);
                    }
                    label {
                        font-size: 14px;
                        margin-bottom: 5px;
                        display: block;
                        font-family: var(--font-primary);
                    }
                    select {
                        font-family: var(--font-primary);
                        display: block;
                        width: 100%;
                        border: 1px solid var(--gray-200);
                        background: var(--gray-100);
                        border-radius: 3px;
                        height: 45px;
                        padding: 0 15px;
                        margin-bottom: 15px;
                        cursor: pointer;
                    }
                    button {
                        background: var(--orange);
                        border: none;
                        cursor: pointer;
                        font-family: var(--font-primary);
                        color: #fff;
                        font-size: 18px;
                        font-weight: bold;
                        width: 100%;
                        padding: 8px;
                        border-radius: 5px;
                        margin-top: 30px;
                    }
                `}
            </style>
        </form>
    );
};
export default AvailibityForm;
