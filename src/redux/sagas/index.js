import transactions from './transactions'
import user from './user'

export default function * rootSaga () {
  yield [
    transactions(),
    user()
  ]
}
