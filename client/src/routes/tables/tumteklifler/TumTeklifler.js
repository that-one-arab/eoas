import React, { useEffect, useState } from "react";
import { CDataTable, CBadge, CButton, CCollapse, CCol, CLabel, CRow } from "@coreui/react";
import { useSelector } from "react-redux";
import { gql, useQuery } from "@apollo/client"
import { fields, getBadge, getStatus, getCondition, toggleDetails, whichCollapsedToRender } from "../";
import "../style.css"

const TumTeklifler = () => {
    const [tableData, setTableData] = useState([])
    const [details, setDetails] = useState([])
    const [clickedItemIndex, setClickedItemIndex] = useState(0)
    const [order, setOrder] = useState(0)
    const [total, setTotal] = useState(0)
    const [bakiyeSonra, setBakiyeSonra] = useState(0)
    
    const eczaneName = useSelector(state => state.user.userSettings.eczaneName)
    const bakiye = useSelector(state => state.user.userInfo.bakiye)

    const GET_ALL_APPLICATIONS = gql`
      query {
        applications{
          application_id
          transaction_id
          product_name
          product_barcode
          goal
          condition
          unit_price
          submitter
          submitter_pledge
          description
          status
          joiners {
            name
            pledge
          }
          submit_date
          final_date
          status_change_date
        }
      }
    `;
    const { loading, refetch , data} = useQuery(GET_ALL_APPLICATIONS, {
      fetchPolicy: "network-only",
      onError: (error) => console.log(error)
    });

    useEffect(() => {
      if(loading === false && data){
        if (data.applications.length !== 0) {
          const dataArr = data.applications.map((obj) => {
            let d = new Date(Number(obj.final_date))
            let date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
            let bgColor = ""
            switch (obj.status) {
              case "APPROVED":
                bgColor = "rgb(55, 229, 148, 0.25)";
                break;
              case "DELETED":
                bgColor = "red";
                break
              default:
                break;
            }
            return {
              birimFiyat: obj.unit_price,
              durum: obj.status,
              eczane: obj.submitter,
              hedef: obj.goal,
              ID: obj.application_id,
              kampanya: obj.condition,
              pledge: obj.submitter_pledge,
              sonTarih: date,
              ??la??: obj.product_name,
              description: obj.description,
              kat??lanlar: obj.joiners,
              bgColor
            }
          })
          return setTableData(dataArr)
        }
      }
    }, [loading, data])
    useEffect(() => {
      if (order >= 0) {
        setTotal(order * tableData[clickedItemIndex]?.birimFiyat)
        setBakiyeSonra(bakiye - total)
      }
    }, [order, total, clickedItemIndex, bakiye, tableData])
  
    return (
      <>
      <CRow>
        <CCol>
          <CLabel className = "tableLabel tumtekliflerGradient" >T??m Teklifler </CLabel>
        </CCol>
      </CRow>
      <CRow>
          <CCol>
            <div style = {{border: "solid 1px rgb(229, 83, 83, 0.35)"}} >
              <CDataTable
                loading = {loading}
                header
                items={tableData}
                fields={fields}
                columnFilter
                footer
                itemsPerPage={50}
                sorter
                pagination
                border
                scopedSlots = {{
                  'eczane':
                    (item)=>(
                      <td style = {{fontSize: "12px"}} >
                          {item.eczane}
                      </td>
                    ),
                  '??la??':
                  (item)=>(
                    <td>
                      <b>{item.??la??}</b>
                    </td>
                    ),
                  'hedef':
                    (item)=>(
                      <td>
                        <CBadge color={"secondary"}>
                        {item.pledge}/{item.hedef}
                        </CBadge>
                      </td>
                    ),
                    'birimFiyat':
                  (item)=>(
                    <td style = {{color: "green"}} >
                      {item.birimFiyat} TL
                    </td>
                  ),
                  'kampanya':
                  (item)=>(
                    <td>
                      {
                        getCondition(item.kampanya)
                      }
                    </td>
                  ),
                  'durum':
                    (item)=>(
                      <td>
                        <CBadge color={getBadge(item.durum)}>
                          {getStatus(item.durum)}
                        </CBadge>
                      </td>
                    ),
                  'show_details':
                    (item, index)=>{
                      return (
                        <td className="py-2">
                          <CButton
                            color="primary"
                            variant="outline"
                            shape="square"
                            size="sm"
                            onClick={()=>{
                              toggleDetails(index, details, setDetails, setOrder, setTotal, setBakiyeSonra)
                              setClickedItemIndex(index)
                              }}
                          >
                            {details.includes(index) ? 'Sakla' : 'G??ster'}
                          </CButton>
                        </td>
                        )
                    },
                  'details':
                      (item, index)=>{
                        return (
                        <CCollapse show={details.includes(index)}>
                            <CCol sm = "12">
                              {whichCollapsedToRender(eczaneName, item.eczane, item, index, order, setOrder, total, bakiyeSonra, refetch)}
                            </CCol>
                        </CCollapse>
                      )
                    }
                }}
              />
            </div>
          </CCol>
      </CRow>
      </>
      )
}

export default TumTeklifler;