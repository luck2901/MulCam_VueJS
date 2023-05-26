


<template>
  <div>
    <table class="table">
      <thead>
        <tr><th>No</th><th>Name</th><th>Tel</th><th>Address</th><th>Photo</th></tr>
      </thead>
      <tbody>
        <tr v-for="contact in contactList.contacts" :key="contact.no">
          <td>{{ contact.no }}</td>
          <td><a href="#"   @click="getContact(contact.no)">{{ contact.name }}</a></td>
          <td>{{ contact.tel }}</td>
          <td>{{ contact.address }}</td>
          <td><img :src="contact.photo" width="50" alt="사진"></td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary"   @click="viewAdd">ADD</button>

    <!-- Get Contact Modal -->
    <div class="modal fade" id="getContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Get Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              Name: <input type="text" class="form-control" disabled      :value="contact.name" />
              Tel: <input type="text" class="form-control" disabled       :value="contact.tel"/>
              Address: <input type="text" class="form-control" disabled   :value="contact.address"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary"   @click="deleteContact(contact.no)">Delete</button>
            <button type="button" class="btn btn-primary"   @click="viewUpdate">Update</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Update Contact Modal -->
    <div class="modal fade" id="updateContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Update Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              Name: <input type="text" class="form-control"     v-model.trim="contact.name"/>
              Tel: <input type="text" class="form-control"      v-model.trim="contact.tel"/>
              Address: <input type="text" class="form-control"  v-model.trim="contact.address"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary"       @click="updateContact(contact)">Update</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Contact Modal -->
    <div class="modal fade" id="addContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Add Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Name: <input type="text" class="form-control"     name="name"     :value="contact.name"   @input="changeString"/>
            Tel: <input type="text" class="form-control"      name="tel"      :value="contact.tel"     @input="changeString"/>
            Address: <input type="text" class="form-control"  name="address"  :value="contact.address"     @input="changeString"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary"       @click="addContact(contact)">ADD</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import * as bootstrap from 'bootstrap/dist/js/bootstrap.esm.js'
import axios from 'axios';

const baseURL = 'http://localhost:8000/contacts/';

export default {
  data() {
    return {
      getContentModal: '',
      updateContentModal: '',
      addContentModal: '',
      contactList: {pageno: '', pagesize: '', totalcount: '', contacts: []},
      contact: {no: '', name: '', tel: '', address: '', photo: ''},
    }
  },
  methods: {
    viewUpdate() {
      this.getContentModal.hide()
      this.updateContentModal.show();
    },
    viewAdd(){
      this.addContentModal.show();
      this.contact = {no: '', name: '', tel: '', address: '', photo: ''};
    },
    async getContactList(no=1, size=10) {
      try  {
        const resp = await axios.get(baseURL, {params: {pageno: no, pagesize: size}});
        console.log(resp.data);
        this.contactList = resp.data;
      } catch(err) {
        console.error(err);
      }
    },
    async getContact(no) {
      this.getContentModal.show();
      try  {
        const resp = await axios.get(baseURL + no);
        this.contact = resp.data;
      } catch(err) {
        console.error(err);
      }
    },
    async deleteContact(no) {
      this.getContentModal.hide();
      try  {
        await axios.delete(baseURL + no);     // 서버쪽 데이터 삭제
        this.getContactList(1, 10);           // 현재 데이터 갱신
      } catch(err) {
        console.error(err);
      }
    },
    async updateContact(data) {
      try  {
        await axios.put(baseURL + data.no, data);   // 서버쪽 데이터 삭제
        this.getContactList(1, 10);                 // 현재 데이터 갱신
      } catch(err) {
        console.error(err);
      }
      this.updateContentModal.hide();
    },
    async addContact(data) {
      if(data.name.length <= 0){
        alert(`이름 값은 반드시 입력되어야 합니다`);
        return;
      }
      if(data.tel.length <= 0){
        alert(`전화 값은 반드시 입력되어야 합니다`);
        return;
      }
      if(data.address.length <= 0){
        alert(`주소 값은 반드시 입력되어야 합니다`);
        return;
      }
      try  {
        await axios.post(baseURL, data);    // 서버쪽 데이터 삭제
        this.getContactList(1, 10);         // 현재 데이터 갱신
      } catch(err) {
        console.error(err);
      }
      this.addContentModal.hide();
    },
    changeString(evt) {
      // 숫자라면 숫자 변환 가드..
      this.contact[evt.target.name] = evt.target.value.trim();
    }
  },
  mounted() {
    this.getContactList(1, 10);

    this.getContentModal = new bootstrap.Modal(document.getElementById('getContent'), {
      keyboard: false
    });
    this.updateContentModal = new bootstrap.Modal(document.getElementById('updateContent'), {
      keyboard: false
    });
    this.addContentModal = new bootstrap.Modal(document.getElementById('addContent'), {
      keyboard: false
    });
  }
}
</script>



