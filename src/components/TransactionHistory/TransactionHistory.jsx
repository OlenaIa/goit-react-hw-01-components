import css from './TransactionHistory.module.css'
import PropTypes from "prop-types";
import { Transactions } from "components/Transactions/Transactions";

export const TransactionHistory = ({ items }) => {
    return (<table className={css.transactionHistory}>
        <thead>
            <tr className={css.row}>
                <th className={css.cell}>Type</th>
                <th className={css.cell}>Amount</th>
                <th className={css.cell}>Currency</th>
            </tr>
        </thead>

        <Transactions items={items} />
    </table>)
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}