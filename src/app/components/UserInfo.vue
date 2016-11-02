<template>
    <div class="nav-user-wrapper" >
        <div class="media">
          <div class="media-left">
            <a class="profile-card-photo" href=""><img :src="userInfo.avatar"></a>
          </div>
          <div class="media-body">
            <span class="media-heading text-white">{{userInfo.name}}</span>
            <div class="text-small text-white-transparent">
              <span>{{role.label}} </span>
            </div>
          </div>
          <div class="media-right media-middle">
            <dropdown>
              <a href="javascript:void(0)" class="dropdown-toggle btn btn-transparent text-white " type="button"  data-toggle="dropdown"><i class="fa fa-cog fa-spin"></i> </a>
              <ul class="dropdown-menu pull-right fadeInUp">
                <li>
                  <router-link to="account">个人资料</router-link>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#" @click.prevent="logout"> 退出账号 </a>
                </li>
              </ul>
            </dropdown>
          </div>
        </div>
      </div>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex'
    import Dropdown from '../components/Dropdown'
    export default {
      computed: mapGetters({
        userInfo: 'account',
        role: 'roles'
      }),
      methods: mapActions([
        'logout'
      ]),
      components: {
        Dropdown
      }
    }
</script>