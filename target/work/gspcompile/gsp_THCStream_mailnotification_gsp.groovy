import streama.Settings
import org.codehaus.groovy.grails.plugins.metadata.GrailsPlugin
import org.codehaus.groovy.grails.web.pages.GroovyPage
import org.codehaus.groovy.grails.web.taglib.*
import org.codehaus.groovy.grails.web.taglib.exceptions.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_THCStream_mailnotification_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/mail/notification.gsp" }
public Object run() {
Writer out = getOut()
Writer expressionOut = getExpressionOut()
registerSitemeshPreprocessMode()
printHtmlPart(0)
printHtmlPart(1)
createTagBody(1, {->
printHtmlPart(2)
invokeTag('captureMeta','sitemesh',6,['gsp_sm_xmlClosingForEmptyTag':("/"),'name':("viewport"),'content':("width=device-width")],-1)
printHtmlPart(2)
invokeTag('captureMeta','sitemesh',7,['gsp_sm_xmlClosingForEmptyTag':("/"),'http-equiv':("Content-Type"),'content':("text/html; charset=UTF-8")],-1)
printHtmlPart(2)
createTagBody(2, {->
createClosureForHtmlPart(3, 3)
invokeTag('captureTitle','sitemesh',8,[:],3)
})
invokeTag('wrapTitleTag','sitemesh',8,[:],2)
printHtmlPart(4)
})
invokeTag('captureHead','sitemesh',187,[:],1)
printHtmlPart(5)
createTagBody(1, {->
printHtmlPart(6)
if(true && (notificationQueues.findAll{it.movie})) {
printHtmlPart(7)
for( notification in (notificationQueues.findAll{it.movie}) ) {
printHtmlPart(8)
expressionOut.print(notification.movie.poster_path)
printHtmlPart(9)
expressionOut.print(notification.movie.title)
printHtmlPart(10)
expressionOut.print(notification.movie.release_date?.substring(0,4))
printHtmlPart(11)
expressionOut.print(notification.description)
printHtmlPart(12)
}
printHtmlPart(13)
}
printHtmlPart(14)
if(true && (notificationQueues.findAll{it.tvShow})) {
printHtmlPart(15)
for( notification in (notificationQueues.findAll{it.tvShow}) ) {
printHtmlPart(8)
expressionOut.print(notification.tvShow.poster_path)
printHtmlPart(9)
expressionOut.print(notification.tvShow.name)
printHtmlPart(10)
expressionOut.print(notification.tvShow.first_air_date?.substring(0,4))
printHtmlPart(11)
expressionOut.print(notification.description)
printHtmlPart(12)
}
printHtmlPart(16)
}
printHtmlPart(17)
expressionOut.print(streama.Settings.findBySettingsKey('Base URL')?.value)
printHtmlPart(18)
})
invokeTag('captureBody','sitemesh',262,['bgcolor':("#f6f6f6")],1)
printHtmlPart(19)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html'
public static final long LAST_MODIFIED = 1485092229583L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
