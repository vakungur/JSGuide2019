import { Component } from '../core/component'
import { ApiServices, apiService } from '../services/api.services'
import { TransFormSevice } from '../services/transform.service'
export class PostsComponent extends Component {
    constructor(id) {
        super(id)
    }
    async onShow() {
        
       const fbData = await apiService.fetchPosts()
      const posts = TransFormSevice.fbObjectToArray(fbData)
      console.log(posts)
    }  
}