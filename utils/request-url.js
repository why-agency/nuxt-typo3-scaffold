import { pipe } from '@/utils/fp'

const createFilterString = (index, currentFilter) => {
  return `tx_solr[filter][${index}]=${
    currentFilter.parent
  }%3A${currentFilter.value.replace(' & ', '+%26+')}`
}

const withFilters = filters => baseUrl => {
  return filters.reduce((url, currentFilter, index) => {
    const filterString = createFilterString(index, currentFilter)
    return url + '&' + filterString
  }, baseUrl)
}

const withSorting = sorting => baseUrl => {
  return baseUrl.endsWith('?') ? baseUrl + sorting : baseUrl + '&' + sorting
}

const withQuery = queryString => baseUrl => {
  return queryString ? baseUrl + `tx_solr[q]=${queryString}` : baseUrl
}

export const createRequestUrl = ({
  baseUrl,
  filters = [],
  sorting = 'tx_solr%5Bsort%5D=relevance+asc',
  queryString = ''
} = {}) =>
  pipe(
    withQuery(queryString),
    withFilters(filters),
    withSorting(sorting),
    encodeURI
  )(baseUrl)
