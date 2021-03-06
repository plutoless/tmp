const BUILD_VERSION = process.env.REACT_APP_BUILD_VERSION as string;
const build_version = BUILD_VERSION ? BUILD_VERSION : '0.0.1';

const en = {
  "electron": {
    "start_screen_share_failed": "native screen sharing failed"
  },
  "icon": {
    "setting": "Setting",
    "upload-log": "Upload Log",
    "exit-room": "Exit Room",
    "lang-select": "Switch Language",
  },
  'doc_center': 'Course Document Center',
  'upload_picture': 'Upload Picture',
  'convert_webpage': 'Dynamic PPT',
  'convert_to_picture': 'Static PPT',
  'upload_audio_video': 'Upload Audio/Video',
  'return': {
    'home': 'Back To Home',
  },
  'control_items': {
    "first_page": "First Page",
    "prev_page": "Prev Page",
    "next_page": "Next Page",
    "last_page": "Last Page",
    "stop_recording": "Stop Cloud Recording",
    "recording": "Start Cloud Recording",
    "quit_screen_sharing": "Stop Screen Sharing",
    "screen_sharing": "Start Screen Sharing",
    "delete_current": "Remove Current",
    "delete_all": "Remove All",
  },
  'zoom_control': {
    'folder': 'Document Center',
    'lock_board': 'Set Whiteboard Follow',
    'unlock_board': 'Reset Whiteboard Follow'
  },
  'tool': {
    'selector': 'mouse selector',
    'pencil': 'penceil',
    'rectangle': 'rectangle',
    'ellipse': 'ellipse',
    'eraser': 'eraser',
    'text': 'text',
    'color_picker': 'color picker',
    'add': 'add new page',
    'upload': 'upload ',
    'hand_tool': 'hand selector'
  },
  'error': {
    'not_found': 'Page Not Found',
    'components': {
      'paramsEmpty': 'params：{reason} can`t be empty',
    }
  },
  'whiteboard': {
    'loading': 'Loading...',
    'global_state_limit': 'globalState size limit size probably overflow',
    'locked_board': 'The teacher is moving the whiteboard. Please do not draw on it.',
    'unlocked_board': 'The whiteboard already unlocked',
  },
  'toast': {
    'upload_log_failure': 'Upload Log Failure，ErrorName: {reason}，see more details in devtool',
    'show_log_id': `Report your log ID: {reason}`,
    'api_login_failured': 'Join Failured, Reason: {reason}',
    'confirm': 'Confirm',
    'cancel': 'Cancel',
    'quit_room': 'Are you sure to exit the classroom?',
    'kick': 'kicked',
    'login_failure': 'login failure',
    'whiteboard_lock': 'Whiteboard follow',
    'whiteboard_unlock': 'Whiteboard nofollow',
    'canceled_screen_share': 'Canceled screen sharing',
    'screen_sharing_failed': 'Screen sharing failed, reason: {reason}',
    'recording_failed': 'Start cloud recording failed, reason: {reason}',
    'start_recording': 'Start cloud recording success',
    'stop_recording': 'Stop cloud recording success',
    'recording_too_short': 'Recording too short, at least 15 seconds',
    'rtm_login_failed': 'login failure, please check your network',
    'rtm_login_failed_reason': 'login failure, reason: {reason}',
    'replay_failed': 'Replay Failed please refresh browser',
    'teacher_exists': 'Teacher already exists, Please waiting for 30s or reopen new class',
    'student_over_limit': 'Student have reached upper limit, , Please waiting for 30s or rejoin new class',
    'teacher_and_student_over_limit': 'The number of students and teacher have reached upper limit',
    'teacher_accept_whiteboard': 'Teacher already grant your whiteboard',
    'teacher_cancel_whiteboard': 'Teacher already cancel your whiteboard',
    'teacher_accept_co_video': 'Teacher already accept co-video',
    'teacher_reject_co_video': 'Teacher already rejected co-video',
    'teacher_cancel_co_video': 'Teacher already canceled co-video',
    'student_cancel_co_video': 'Student canceled co-video',
    'student_peer_leave': '"{reason}" Left',
    'student_send_co_video_apply': '"{reason}" send the co-video request',
    'stop_co_video': 'Stop "{reason}" co-video',
    'reject_co_video': 'Reject co-video',
    'close_co_video': 'Close co-video',
    'close_youself_co_video': 'Stop co-video',
    'accept_co_video': 'Accept co-video',
  },
  'notice': {
    'student_interactive_apply': `"{reason}" wants to interact with you`
  },
  'chat': {
    'placeholder': 'Input Message',
    'banned': 'Banned',
    'send': 'send'
  },
  'device': {
    'camera': 'Camera',
    'microphone': 'Microphone',
    'speaker': 'Speaker',
    'finish': 'Finish',
  },
  'nav': {
    'delay': 'Delay: ',
    'network': 'Network: ',
    'cpu': 'CPU: ',
    'class_end': 'Class end',
    'class_start': 'Class start'
  },
  'home': {
    'entry-home': 'Join Classroom',
    'teacher': 'teacher',
    'student': 'student',
    'cover_class': 'cover-en',
    'room_name': 'Room Name',
    'nickname': 'Your Name',
    'room_type': 'Room Type',
    'room_join': 'Join',
    'short_title': {
      'title': 'Agora Cloud Class',
      'subtitle': 'Powered by agora.io, a leading online learning engagement platform',
    },
    'name_too_long': 'name too long, should <= 20 characters',
    '1v1': 'One to One Classroom',
    'mini_class': 'Small Classroom',
    'large_class': 'Lecture Hall',
    'missing_room_name': 'missing room name',
    'missing_your_name': 'missing your name',
    'missing_password': 'missing password',
    'missing_role': 'missing role',
    'account': 'Name',
    'password': 'Password',
  },
  'room': {
    'chat_room': 'Chat Room',
    'student_list': 'Student List',
    'uploading': 'Uploading...',
    'converting': 'Converting...',
    'upload_success': 'upload success',
    'upload_failure': 'upload failure, check the network',
    'convert_success': 'convert success',
    'convert_failure': 'convert failure, check the network',
  },
  'replay': {
    'loading': 'loading...',
    'recording': 'In Recording',
    'finished': 'Finished',
    'finished_recording_to_be_download': 'Server prepare downloading',
    'finished_download_to_be_convert': 'Server prepare converting',
    'finished_convert_to_be_upload': 'Server prepare saving',
  },
  'course_recording': 'course recording',
  'build_version': `build version: ${build_version}`,
}

export default en;