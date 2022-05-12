import Loading from '@/src/components/libs/loading'

const Loader = ({ source, loading, component, blank, template, map = true, spinner = true }) => {

  const empty = typeof blank === 'boolean' ? blank : true

  if (loading) {
    if (spinner)
      return <Loading />
  }

  if (source === undefined)
    return null

  if (Array.isArray(source)) {

    if (source.length) {

      if (!map) {
        return component(source)
      }

      return source.map((item, index) => component(item, index))
    }

  } else if (source instanceof Object) {

    if (Object.values(source).indexOf(null))
      return component(source)
  }

  if (empty)
    return null

  else {

    if (template) {

      return template()
    }

    return null
  }

}

export default Loader
