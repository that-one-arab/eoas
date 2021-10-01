import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CModalFooter
} from '@coreui/react'
import { gql, useLazyQuery } from "@apollo/client";
import CIcon from '@coreui/icons-react'
import { useDispatch } from 'react-redux'
import Loader from '../../hoc/loader/Loader'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [modal, setModal] = React.useState(false)
  const GET_LOGIN = gql`
    query($username: String! $password: String!) {
      login(username: $username password: $password ) {
        username
        password
        token {
          username
          pharmacy_name
          role
          token
        }
      }
    }
  `;
  const [getLogin, { loading }] = useLazyQuery(GET_LOGIN, {
    fetchPolicy: "network-only",
    onError: (err) => console.log(err),
    onCompleted: (data) => {
      // console.log(data)
      const { token } = data.login
      document.cookie = `pyecztoken=${token.token}`
      dispatch({type: 'LOG_IN'})
      dispatch({type: 'FILL_USER_SETTINGS', eczaneName: token.pharmacy_name, username: token.username})
      history.push('/dashboard')
    }
  });
  const modalObj = {
    header: "HATA",
    body: "LÜTFEN BİLGİLERİNİZİ KONTROL EDİN"
  }
  return (
    <Loader isLoading = {loading}>
      <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
      <CModal 
        show={modal} 
        onClose={() => {setModal(false);}}
        color='warning'
        centered
        >
            <CModalHeader closeButton>
                <CModalTitle> {modalObj.header} </CModalTitle>
            </CModalHeader>
            <CModalBody>
                <h5>{modalObj.body}</h5>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary"
                 onClick={() => {setModal(false)}}
                 >Kapat</CButton>
            </CModalFooter>
        </CModal>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Giriş</h1>
                    <p className="text-muted">Hesabınıza giriş yapın</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="kullanıcı isminiz" autoComplete="username" onChange = {(e) => setUsername(e.target.value)} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="şifreniz" autoComplete="current-password" onChange = {(e) => setPassword(e.target.value)} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4"
                          onClick = {() => getLogin({variables: {username, password}})}>Giriş yap</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <p>Hesabınız yok mu?</p>
                    <h2>Hesap oluşturun</h2>
                    <p>Bütün eczanelere kolay bir şekilde ortak alışveriş hizmetlerini sağlıyoruz.
                    Toptancılardan alım yaparken adet hedefi derdiniz kalmasın!</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Kayıt olun!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    </Loader>
   
  )
}

export default Login
