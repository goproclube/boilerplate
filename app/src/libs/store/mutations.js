const mutations = (state, data) => {

  switch (data.type) {

    case 'profile':
      return { ...state, profile: data.profile }
  }
}

export default mutations