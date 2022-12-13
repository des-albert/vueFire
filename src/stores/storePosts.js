import { defineStore } from 'pinia'
import { collection, doc, onSnapshot, query } from 'firebase/firestore'

import { db } from '@/js/firebase'

const postsCollectionRef = collection(db, 'images' )
const postsCollectionQuery = query(postsCollectionRef)


export const useStorePosts = defineStore('storePosts',  {
  state: () => {
    return{
      posts: [

      ],
      postCount: 0    
    }
  },
  actions: {
    async getPosts() {
      onSnapshot(postsCollectionQuery, (querySnapshot) => {
        let result = []
        querySnapshot.forEach((doc) => {
          let item = {
            id: doc.id,
            url: doc.data().url,
            title: doc.data().title,
            description: doc.data().description           
          }
          result.push(item)
        })

        this.posts = result
        this.postCount = result.length

      })

    }
  },
  getters: {
    getPostCount: (state) => {
      return state.postCount
    }
  }

 
})
