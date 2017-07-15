import splitwise from './splitwise'
import transactions from './transactions'
import user from './user'

export default function * rootSaga () {
  yield [
    splitwise(),
    transactions(),
    user()
  ]
}
