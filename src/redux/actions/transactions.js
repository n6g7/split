export const types = {
  SYNC_TRANSACTIONS: 'SYNC_TRANSACTIONS'
}

export const syncTransactions = transactions => ({
  type: types.SYNC_TRANSACTIONS,
  transactions
})
