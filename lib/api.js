const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' }


	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export async function getAllMenuItems() {
	const data = await fetchAPI(`
	query MyQuery {
		items {
		  edges {
			node {
			  id
			  title
			  slug
			  featuredImage {
				node {
				  altText
				  mediaDetails {
					width
					height
				  }
				  sourceUrl
				}
			  }
			}
		  }
		}
	  }
	  
	`)
	return data?.items // if there is data return the items
}

export async function getAllMenuItemSlugs() {
	const data = await fetchAPI(`
	query MyQuery {
		items {
		  edges {
			node {
			  id
			  slug
			}
		  }
		}
	  }
	  
	`)
	return data?.items // if there is data return the items
}

export async function getMenuItemBySlug(id) {
	const data = await fetchAPI(`
	query MyQuery($id: ID!) {
		item(id: $id, idType: SLUG) {
		  id
		  title
		  content
		  featuredImage {
			node {
			  altText
			  mediaDetails {
				height
				width
			  }
			  sourceUrl
			}
		  }
		}
	}`, {
		variables: {
			"id" : id
		}
	})
	return data?.item
}

export async function getMenuTypesandMenuItems () {
	const data = await fetchAPI(`
	query MyQuery {
		menuTypes {
		  edges {
			node {
			  id
			  name
			  items {
				edges {
				  node {
					id
					title
					slug
					featuredImage {
					  node {
						altText
						sourceUrl
						mediaDetails {
						  height
						  width
						}
					  }
					}
				  }
				}
			  }
			}
		  }
		}
	  }
	  `)
	return data?.menuTypes
}


export async function getLocationSlugs() {
	const data = await fetchAPI(`
	query MyQuery {
		locations {
		  edges {
			node {
			  id
			  slug
			}
		  }
		}
	  }
	  
	`)
	return data?.locations // if there is data return the items
}

export async function getLocationBySlug(id) {
	const data = await fetchAPI(`
	query MyQuery($id: ID!) {
		location(id: $id, idType: SLUG) {
		  id
		  title
		  content
		  featuredImage {
			node {
			  altText
			  mediaDetails {
				height
				width
			  }
			  sourceUrl
			}
		  }
		}
	}`, {
		variables: {
			"id" : id
		}
	})
	return data?.location
}

export async function getLocationNames () {
	const data = await fetchAPI(`
	query MyQuery {
		locations {
		  edges {
			node {
			  id
			  title
			  slug
			  featuredImage {
				node {
				  altText
				  mediaDetails {
					height
					width
				  }
				  sourceUrl
				}
			  }
			}
		  }
		}
	  }
	  
	  `)
	return data?.locations
}


export async function getPeopleSlugs() {
	const data = await fetchAPI(`
	query MyQuery {
		people {
		  edges {
			node {
			  id
			  slug
			}
		  }
		}
	  }
	  
	`)
	return data?.people  // if there is data return the items
}

export async function getPersonBySlug(id) {
	const data = await fetchAPI(`
	query MyQuery($id: ID!) {
		person(id: $id, idType: SLUG) {
		  id
		  title
		  content
		  featuredImage {
			node {
			  altText
			  mediaDetails {
				height
				width
			  }
			  sourceUrl
			}
		  }
		}
	}`, {
		variables: {
			"id" : id
		}
	})
	return data?.person
}

export async function getPeopleNames () {
	const data = await fetchAPI(`
	query MyQuery {
		people {
		  edges {
			node {
			  id
			  title
			  slug
			  featuredImage {
				node {
				  altText
				  mediaDetails {
					height
					width
				  }
				  sourceUrl
				}
			  }
			}
		  }
		}
	  }
	  
	  `)
	return data?.people
}