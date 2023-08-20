"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "../../../../../styles/dashboard/Admin/crowdFounding.css";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import api from "../../../../../hooks/api/api";
import { IoAdd } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import {
  DialogContent,
  DialogContentText,
  FormControl,
  Pagination,
  PaginationItem,
  Select,
} from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
import ReactLoading from "react-loading";
import { MdDelete } from "react-icons/md";
import { RiFileUploadFill } from "react-icons/ri";
import * as yup from "yup";
import Skeleton from "react-loading-skeleton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const Message = () => {
  const [clickedProject, setClickedProject] = useState({});
  const [clickedMessage, setClickedMessage] = useState({});
  const [open, setOpen] = React.useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [messages, setMessages] = useState([]);

  const getMessage = async (page) => {
    setTableLoading(true);
    const messageResponse = await api.get(
      `comment/findAll?page=${page - 1}&size=6`
    );
    setMessages(messageResponse);
    setTableLoading(false);
  };

  useEffect(() => {
    getMessage(page);
  }, []);

  const handleClickOpen = (msg) => {
    setClickedProject(msg);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePagination = async (event, value) => {
    setPage(value);
    await getMessage(value);
  };
  const handleRemoveMessage = () => {
    api.delete(`comment/${clickedProject.id}`).then(() => {
      setPage(page);
      getMessage(page);
    });
    setClickedProject({});
    setOpen(false);
  };
  const handleClickOpenMessage = (msg) => {
    setClickedMessage(msg);
    setOpenMessage(true);
  };
  const handleCloseMessage = () => {
    setOpenMessage(false);
  };

  return (
    <>
      <div className="project-box p-10">
        <div className="flex justify-between">
          <h3 className="project-box-title">پیام ها</h3>
        </div>
        <div>
          <table className="project-box-table">
            <thead>
              <tr>
                <th>شماره</th>
                <th>نام و نام خانوادگی</th>
                <th>ایمیل</th>
                <th> پیام</th>
                <th> عملیات </th>
              </tr>
            </thead>
            <tbody>
              {tableLoading
                ? [...Array(5)].map(() => (
                    <tr>
                      <td>
                        <Skeleton animation="wave" height={20} width="50%" />
                      </td>
                      <td>
                        <Skeleton animation="wave" height={20} width="50%" />
                      </td>
                      <td>
                        <Skeleton animation="wave" height={20} width="50%" />
                      </td>
                      <td>
                        <Skeleton animation="wave" height={20} width="50%" />
                      </td>
                      <td>
                        <Skeleton animation="wave" height={20} width="50%" />
                      </td>
                      <td>
                        <Skeleton animation="wave" height={20} width="50%" />
                      </td>
                      <td>
                        <Skeleton animation="wave" height={20} width="50%" />
                      </td>
                    </tr>
                  ))
                : messages.content?.map((msg, i) => (
                    <tr>
                      <td>{i + 1}</td>
                      <td className="flex justify-center items-center">
                        {msg.fullName}
                      </td>
                      <td>{msg.email}</td>
                      <td>{msg.message.slice(0, 15)} ...</td>

                      <td>
                        <button
                          className="project-button-edit"
                          onClick={() => handleClickOpenMessage(msg)}
                        >
                          مشاهده پیام
                        </button>

                        <Dialog
                          maxWidth="sm"
                          fullWidth={true}
                          open={openMessage}
                          onClose={handleCloseMessage}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle
                            id="alert-dialog-title"
                            style={{ textAlign: "center" }}
                          >
                            متن پیام
                          </DialogTitle>
                          <DialogContent
                            style={{ textAlign: "center", fontSize: "1.1rem" }}
                          >
                            {clickedMessage.message}
                          </DialogContent>
                          <DialogActions>
                            <button
                              className="px-3 py-2 bg-neutral-300 rounded-xl mx-2"
                              onClick={handleCloseMessage}
                            >
                              بستن
                            </button>
                          </DialogActions>
                        </Dialog>

                        <button
                          className="project-button-delete"
                          onClick={() => handleClickOpen(msg)}
                        >
                          حذف پیام
                        </button>

                        <Dialog
                          maxWidth="sm"
                          fullWidth={true}
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle
                            id="alert-dialog-title"
                            style={{ textAlign: "center" }}
                          >
                            حذف پیام
                          </DialogTitle>
                          <DialogContent
                            style={{ textAlign: "center", fontSize: "1.1rem" }}
                          >
                            آیا از حذف پیام مطمئن هستید؟
                          </DialogContent>
                          <DialogActions>
                            <button
                              className="px-3 py-2 bg-red-500 rounded-xl mx-2"
                              onClick={handleRemoveMessage}
                              autoFocus
                            >
                              حذف
                            </button>
                            <button
                              className="px-3 py-2 bg-neutral-300 rounded-xl mx-2"
                              onClick={handleClose}
                            >
                              بستن
                            </button>
                          </DialogActions>
                        </Dialog>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>

          <div className="flex justify-center mt-10">
            <CacheProvider value={cacheRtl}>
              <ThemeProvider theme={theme}>
                <Pagination
                  defaultPage={"1"}
                  count={messages.totalPages}
                  page={page}
                  onChange={handlePagination}
                  variant="outlined"
                  renderItem={(item) => (
                    <PaginationItem
                      {...item}
                      sx={{ fontFamily: "Vazirmatn RD FD" }}
                    />
                  )}
                />
              </ThemeProvider>
            </CacheProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
