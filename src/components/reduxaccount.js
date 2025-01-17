import { useSelector } from "react-redux";

const ReduxAccount = () => {

    const data = useSelector((state) => {
        return state
    })

    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <th>balance</th>
                    <th>fullname</th>
                    <th>mobile</th>
                </tr>
                <tr>
                    <td>{data.balance}</td>
                    <td>{data.fullname}</td>
                    <td>{data.mobile}</td>
                </tr>
                </tbody>
            </table>

        </div>
    )
}

export default ReduxAccount